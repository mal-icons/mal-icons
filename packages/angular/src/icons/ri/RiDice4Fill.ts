import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-dice-4-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiDice4Fill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M5 3C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3H5ZM9 10.5C8.17 10.5 7.5 9.83 7.5 9C7.5 8.17 8.17 7.5 9 7.5C9.83 7.5 10.5 8.17 10.5 9C10.5 9.83 9.83 10.5 9 10.5ZM10.5 15C10.5 15.83 9.83 16.5 9 16.5C8.17 16.5 7.5 15.83 7.5 15C7.5 14.17 8.17 13.5 9 13.5C9.83 13.5 10.5 14.17 10.5 15ZM16.5 15C16.5 15.83 15.83 16.5 15 16.5C14.17 16.5 13.5 15.83 13.5 15C13.5 14.17 14.17 13.5 15 13.5C15.83 13.5 16.5 14.17 16.5 15ZM16.5 9C16.5 9.83 15.83 10.5 15 10.5C14.17 10.5 13.5 9.83 13.5 9C13.5 8.17 14.17 7.5 15 7.5C15.83 7.5 16.5 8.17 16.5 9Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiDice4Fill;
