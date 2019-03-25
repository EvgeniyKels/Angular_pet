export abstract class AbstrAuth {
  abstract registration(user): boolean;
  abstract logination(user): boolean;
}
