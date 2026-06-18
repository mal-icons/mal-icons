import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-run-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiRunLine {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M9.83 8.79L8 9.46V13H6V8.05H6.02L11.28 6.13C11.53 6.04 11.79 5.99 12.06 6C13.18 6.03 14.15 6.76 14.49 7.82C14.68 8.4 14.85 8.8 15 9C15.91 10.22 17.37 11 19 11V13C16.83 13 14.88 12.01 13.6 10.45L12.9 14.41L15 16.17V23H13V17.1L10.73 15.2L10 19.33L3.11 18.11L3.46 16.14L8.38 17.01L9.83 8.79ZM13.5 5.5C12.4 5.5 11.5 4.6 11.5 3.5C11.5 2.4 12.4 1.5 13.5 1.5C14.6 1.5 15.5 2.4 15.5 3.5C15.5 4.6 14.6 5.5 13.5 5.5Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiRunLine;
