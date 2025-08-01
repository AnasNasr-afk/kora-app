import { Request, Response } from 'express';
import prisma from './../prisma/client';

export async function createCurt(req: Request, res: Response) {
  try {
    const { name, address, latitude, longitude, pricePerHour, maxPlayers } =
      req.body;

    const result = await prisma.court.create({
      data: {
        name,
        address,
        latitude,
        longitude,
        pricePerHour,
        maxPlayers,
      },
    });

    res
      .status(201)
      .json({ message: 'court created successfully', data: result });
  } catch (error) {
    console.log('CREATE COURT ERROR: ', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

export async function updateCourt(req: Request, res: Response) {
  try {
    const courtId = req.params.id;
    const data = req.body;
    let result = {};
    try {
      result = await prisma.court.update({
        where: { id: courtId },
        data,
      });
    } catch (error) {
      return res
        .status(400)
        .json({ message: 'Invalid ID, can not found the requested court' });
    }

    res
      .status(201)
      .json({ message: 'court updated successfully', data: result });
  } catch (error) {
    console.log('UPDATE COURT ERROR: ', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}
