import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-thunderstorms-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiThunderstormsFill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M16.99 18L18.2 16.42C18.41 16.16 18.52 15.84 18.52 15.5C18.52 14.68 17.84 14 17.02 14H15V10.03C15 9.56 14.78 9.12 14.41 8.84C13.76 8.33 12.82 8.46 12.31 9.11L5.95 17.4C3.04 16.2 1 13.34 1 10C1 5.58 4.58 2 9 2C12.39 2 15.3 4.11 16.46 7.1C16.8 7.03 17.14 7 17.5 7C20.54 7 23 9.46 23 12.5C23 15.54 20.54 18 17.5 18H16.99ZM13 16H16L11 22.5V18H8L13 11.5V16Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiThunderstormsFill;
