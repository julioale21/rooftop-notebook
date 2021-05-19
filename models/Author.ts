export class Author {
  private id: String;
  private firstName: String;
  private lastName: String;
  private age: Number;
  private nacionality: String;

  public getId(): String {
    return this.id;
  }

  public setId(id: String): void {
    this.id = id;
  }

  public getFirstName(): String {
    return this.firstName;
  }

  public setFirstName(firstName: String): void {
    this.firstName = firstName;
  }

  public getLastName(): String {
    return this.lastName;
  }

  public setLastName(lastName: String): void {
    this.lastName = lastName;
  }

  public getAge(): Number {
    return this.age;
  }

  public setAge(age: Number): void {
    this.age = age;
  }

  public getNacionality(): String {
    return this.nacionality;
  }

  public setNacionality(nacionality: String): void {
    this.nacionality = nacionality;
  }
}
