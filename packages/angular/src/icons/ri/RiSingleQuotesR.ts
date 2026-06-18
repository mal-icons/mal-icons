import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-single-quotes-r",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiSingleQuotesR {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M14.42 6.68C15.45 7.77 16 9 16 10.99C16 14.49 13.54 17.63 9.97 19.18L9.08 17.8C12.41 15.99 13.06 13.65 13.32 12.18C12.79 12.46 12.08 12.55 11.4 12.49C9.59 12.32 8.17 10.84 8.17 9C8.17 7.07 9.74 5.5 11.67 5.5C12.74 5.5 13.77 5.99 14.42 6.68Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiSingleQuotesR;
