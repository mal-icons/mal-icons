import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-shake-hands-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiShakeHandsFill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M19.29 6H20C20.55 6 21 6.45 21 7V14C21 14.55 20.55 15 20 15H18L13.83 9.16C13.33 8.47 12.45 8.17 11.63 8.41L9.14 9.16C8.44 9.37 7.68 9.18 7.16 8.66L6.86 8.36C6.42 7.92 6.49 7.17 7.02 6.82L12.42 3.22C13.08 2.78 13.93 2.77 14.6 3.2L18.75 5.84C18.92 5.95 19.1 6 19.29 6ZM5.03 14.29L3.41 15.71C2.94 16.12 2.96 16.86 3.45 17.25L8.59 21.29C9.07 21.66 9.78 21.53 10.08 21L10.78 19.76C11.21 19.01 11.11 18.07 10.53 17.43L7.82 14.45C7.09 13.65 5.85 13.58 5.03 14.29ZM7.05 5H3C2.45 5 2 5.45 2 6V13.52C2 13.92 2.12 14.32 2.35 14.65C2.37 14.62 2.4 14.6 2.42 14.58L4.04 13.17C5.47 11.91 7.65 12.03 8.93 13.45L11.64 16.42C12.66 17.54 12.84 19.19 12.09 20.51L11.43 21.65C11.99 21.87 12.64 21.82 13.17 21.5L17.58 18.85C18.08 18.55 18.22 17.89 17.88 17.41L12.61 10.04C12.49 9.86 12.27 9.79 12.06 9.85L9.58 10.59C8.34 10.96 7 10.63 6.09 9.72L5.8 9.42C4.69 8.31 4.87 6.45 6.18 5.58L7.05 5Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiShakeHandsFill;
