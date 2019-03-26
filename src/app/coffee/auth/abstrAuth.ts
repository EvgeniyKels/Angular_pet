export abstract class AbstrAuth {
  abstract registration(user): boolean;
  abstract login(user): boolean;
}
