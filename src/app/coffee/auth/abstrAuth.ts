export abstract class AbstrAuth {
  abstract Registration(user): boolean;
  abstract Logination(user): boolean;
}
