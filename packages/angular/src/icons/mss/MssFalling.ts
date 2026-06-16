import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-falling",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssFalling {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"m532-62-60-12 31-168-146-110-55-240-105 90 31 148-60 12-37-180 174-155q21-19 49-15t55 15q34 14 70 20.5t72 1.5q33-5 61.5-22.5T667-716l38 47q-27 21-56 40t-62 28q-35 10-72 8t-72-11l33 150 154-29 196 139-36 48-168-117-170 34 121 89-41 228ZM320-760q-29 0-49.5-20.5T250-830q0-29 20.5-49.5T320-900q29 0 49.5 20.5T390-830q0 29-20.5 49.5T320-760Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssFalling;
