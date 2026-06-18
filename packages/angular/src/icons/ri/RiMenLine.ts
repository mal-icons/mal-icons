import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-men-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiMenLine {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M15.05 8.54L18.59 5H14V3H22V11H20V6.41L16.46 9.95C17.43 11.21 18 12.79 18 14.5C18 18.64 14.64 22 10.5 22C6.36 22 3 18.64 3 14.5C3 10.36 6.36 7 10.5 7C12.21 7 13.79 7.57 15.05 8.54ZM10.5 20C13.54 20 16 17.54 16 14.5C16 11.46 13.54 9 10.5 9C7.46 9 5 11.46 5 14.5C5 17.54 7.46 20 10.5 20Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiMenLine;
