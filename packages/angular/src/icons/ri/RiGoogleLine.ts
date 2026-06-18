import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-google-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiGoogleLine {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 11H20.53C20.58 11.38 20.6 11.78 20.6 12.18C20.6 14.92 19.62 17.22 17.92 18.78C16.44 20.16 14.4 20.96 11.98 20.96C8.47 20.96 5.43 18.95 3.96 16.01C3.35 14.8 3 13.43 3 11.98C3 10.53 3.35 9.16 3.96 7.95C5.43 5.01 8.47 3 11.98 3C14.4 3 16.43 3.89 17.99 5.34L16.53 6.8C15.37 5.68 13.8 5 12 5C8.13 5 5 8.13 5 12C5 15.87 8.13 19 12 19C15.53 19 18.14 16.39 18.58 13H12V11Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiGoogleLine;
