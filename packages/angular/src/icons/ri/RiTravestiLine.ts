import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-travesti-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiTravestiLine {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M8.95 8.54C10.21 7.57 11.79 7 13.5 7C17.64 7 21 10.36 21 14.5C21 18.64 17.64 22 13.5 22C9.36 22 6 18.64 6 14.5C6 12.79 6.57 11.21 7.54 9.95L4.66 7.08L2.19 9.55L0.77 8.14L7.14 1.77L8.55 3.19L6.08 5.66L8.95 8.54ZM13.5 20C16.54 20 19 17.54 19 14.5C19 11.46 16.54 9 13.5 9C10.46 9 8 11.46 8 14.5C8 17.54 10.46 20 13.5 20Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiTravestiLine;
