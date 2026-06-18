import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-rainy-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiRainyFill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M15.86 18L12.71 14.85C12.32 14.46 11.68 14.46 11.29 14.85L8.18 17.96C4.15 17.55 1 14.14 1 10C1 5.58 4.58 2 9 2C12 2 14.61 3.65 15.98 6.09C16.31 6.03 16.65 6 17 6C20.31 6 23 8.69 23 12C23 15.31 20.31 18 17 18H15.86ZM10.23 18.73L12 16.96L13.77 18.73C14.74 19.71 14.74 21.29 13.77 22.27C12.79 23.24 11.21 23.24 10.23 22.27C9.26 21.29 9.26 19.71 10.23 18.73Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiRainyFill;
