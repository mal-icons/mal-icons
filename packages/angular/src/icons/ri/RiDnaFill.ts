import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-dna-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiDnaFill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M18 1C18 1.72 17.94 2.38 17.82 3H8.23C8.87 5.55 10.79 7.23 13.58 9.43C13.08 9.86 12.55 10.29 12 10.73C8.73 8.13 6 5.67 6 1H4C4 6.47 7.21 9.46 10.39 12C7.21 14.54 4 17.53 4 23H6C6 18.04 9.08 15.57 12.62 12.79L12.71 12.71C16.15 10.01 20 6.99 20 1H18ZM17.82 21H8.23C8.89 18.37 10.92 16.67 13.85 14.36C14.3 14.01 14.74 13.66 15.18 13.31C17.77 15.6 20 18.44 20 23H18C18 22.28 17.94 21.62 17.82 21Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiDnaFill;
