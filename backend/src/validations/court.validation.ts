import { Request, Response, NextFunction } from 'express';
import { Message } from 'twilio/lib/twiml/MessagingResponse';

export function createCurtValidation(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { name, address, latitude, longitude, pricePerHour, maxPlayers } =
    req.body;
  if (!name) {
    return res.status(400).json({ message: 'Court name is required' });
  }
  if (!address) {
    return res.status(400).json({ message: 'Court address is required' });
  }
  if (!latitude) {
    return res.status(400).json({ message: 'Court latitude is required' });
  }
  if (!longitude) {
    return res.status(400).json({ message: 'Court longitude is required' });
  }
  if (!pricePerHour) {
    return res.status(400).json({ message: 'Court pricePerHour is required' });
  }
  if (!maxPlayers) {
    return res
      .status(400)
      .json({ message: 'the number maxPlayers maxPlayers is required' });
  }
  next();
}

export function updateCurtValidation(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { name, address, latitude, longitude, pricePerHour, maxPlayers } =
    req.body;

  if (
    !(name || address || latitude || longitude || pricePerHour || maxPlayers)
  ) {
    return res.status(400).json({
      message:
        'You can update name, address, latitude, longitude, pricePerHour or maxPlayers',
    });
  }

  next();
}
