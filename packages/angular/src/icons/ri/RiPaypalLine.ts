import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-paypal-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiPaypalLine {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M8.5 20.67H10.05L10.59 17.29C10.8 15.93 11.97 14.93 13.35 14.93H13.85C16.53 14.93 17.92 13.94 18.41 11.42C18.61 10.36 18.52 9.69 18.23 9.32C17.03 12.37 14.44 13.48 11.27 13.48H10.39C10 13.48 9.59 13.69 9.54 14.06L8.5 20.67ZM3.55 20.37C3.21 20.37 2.96 20.07 3.01 19.74L5.68 2.78C5.75 2.33 6.14 2 6.59 2H13.01C15.23 2 16.96 2.47 17.91 3.56C18.78 4.55 19.04 5.64 18.78 7.25C19.14 7.44 19.45 7.67 19.7 7.96C20.52 8.89 20.68 10.22 20.37 11.81C19.63 15.61 17.09 16.93 13.85 16.93H13.35C12.96 16.93 12.62 17.21 12.56 17.6L11.86 21.99C11.8 22.38 11.46 22.67 11.06 22.67H6.72C6.42 22.67 6.2 22.4 6.24 22.11L6.52 20.37H3.55ZM10.39 11.48H11.27C14.46 11.48 16.17 10.27 16.75 7.25C16.77 7.15 16.79 7.05 16.81 6.94C16.97 5.88 16.86 5.39 16.41 4.88C15.95 4.35 14.81 4 13.01 4H7.51L5.25 18.37H6.81L7.54 13.75L7.55 13.75C7.85 12.43 9.02 11.48 10.39 11.48Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiPaypalLine;
