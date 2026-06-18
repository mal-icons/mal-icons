import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-search-eye-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiSearchEyeFill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M18.03 16.62L22.31 20.9L20.9 22.31L16.62 18.03C15.08 19.26 13.12 20 11 20C6.03 20 2 15.97 2 11C2 6.03 6.03 2 11 2C15.97 2 20 6.03 20 11C20 13.12 19.26 15.08 18.03 16.62ZM12.18 7.18C11.81 7.06 11.41 7 11 7C8.79 7 7 8.79 7 11C7 13.21 8.79 15 11 15C13.21 15 15 13.21 15 11C15 10.59 14.94 10.19 14.82 9.82C14.51 10.52 13.81 11 13 11C11.9 11 11 10.1 11 9C11 8.19 11.48 7.49 12.18 7.18Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiSearchEyeFill;
