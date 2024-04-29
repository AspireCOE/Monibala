
class Area {
	int length;
	int breadth;

	//constructor
	Area(int length, int breadth)
	{
		this.length = length;
		this.breadth = breadth;
	}

	// method 
	public void getArea()
	{
		int area = length * breadth;
		System.out.println("Area: " + area);
	}
}

class Main {
	public static void main(String[] args)
	{

		Area rectangle = new Area(2, 16);
		rectangle.getArea();
	}
}
