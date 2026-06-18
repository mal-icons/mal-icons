import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-sword-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiSwordLine {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M17.46 3L21 3L21 6.53L15.53 11.99L18.36 14.82L19.78 13.41L21.19 14.82L18.72 17.3L21.55 20.12L20.13 21.54L17.3 18.71L14.83 21.19L13.41 19.77L14.83 18.36L12 15.53L9.17 18.36L10.58 19.77L9.17 21.19L6.7 18.71L3.87 21.54L2.45 20.12L5.28 17.3L2.81 14.82L4.22 13.41L5.63 14.82L8.46 11.99L3 6.53L3 3L6.55 3L12 8.46L17.46 3ZM9.88 13.41L7.05 16.23L7.76 16.94L10.58 14.11L9.88 13.41ZM19 5H18.28L13.41 9.87L14.12 10.58L19 5.7V5ZM5 5V5.7L16.24 16.94L16.95 16.23L5.72 5L5 5Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiSwordLine;
