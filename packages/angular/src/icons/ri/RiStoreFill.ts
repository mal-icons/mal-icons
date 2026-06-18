import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-store-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiStoreFill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M21 11.65V21C21 21.55 20.55 22 20 22H4C3.45 22 3 21.55 3 21V11.65C2.38 10.94 2 10.01 2 9V3C2 2.45 2.45 2 3 2H21C21.55 2 22 2.45 22 3V9C22 10.01 21.62 10.94 21 11.65ZM14 9C14 8.45 14.45 8 15 8C15.55 8 16 8.45 16 9C16 10.1 16.9 11 18 11C19.1 11 20 10.1 20 9V4H4V9C4 10.1 4.9 11 6 11C7.1 11 8 10.1 8 9C8 8.45 8.45 8 9 8C9.55 8 10 8.45 10 9C10 10.1 10.9 11 12 11C13.1 11 14 10.1 14 9Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiStoreFill;
