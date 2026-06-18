import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-dice-5-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiDice5Fill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M5 3C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3H5ZM10 8.5C10 9.33 9.33 10 8.5 10C7.67 10 7 9.33 7 8.5C7 7.67 7.67 7 8.5 7C9.33 7 10 7.67 10 8.5ZM8.5 17C7.67 17 7 16.33 7 15.5C7 14.67 7.67 14 8.5 14C9.33 14 10 14.67 10 15.5C10 16.33 9.33 17 8.5 17ZM15.5 17C14.67 17 14 16.33 14 15.5C14 14.67 14.67 14 15.5 14C16.33 14 17 14.67 17 15.5C17 16.33 16.33 17 15.5 17ZM15.5 10C14.67 10 14 9.33 14 8.5C14 7.67 14.67 7 15.5 7C16.33 7 17 7.67 17 8.5C17 9.33 16.33 10 15.5 10ZM13.5 12C13.5 12.83 12.83 13.5 12 13.5C11.17 13.5 10.5 12.83 10.5 12C10.5 11.17 11.17 10.5 12 10.5C12.83 10.5 13.5 11.17 13.5 12Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiDice5Fill;
