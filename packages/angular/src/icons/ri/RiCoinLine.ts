import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-coin-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiCoinLine {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 4C18.08 4 23 6.69 23 10V14C23 17.32 18.08 20 12 20C6.04 20 1.18 17.41 1.01 14.18L1 14V10C1 6.69 5.93 4 12 4ZM12 16C8.28 16 5 15 3 13.45L3 14C3 15.89 6.89 18 12 18C17.02 18 20.84 15.97 21 14.12L21 14L21.01 13.45C19.02 15 15.73 16 12 16ZM12 6C6.89 6 3 8.12 3 10C3 11.89 6.89 14 12 14C17.12 14 21 11.89 21 10C21 8.12 17.12 6 12 6Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiCoinLine;
