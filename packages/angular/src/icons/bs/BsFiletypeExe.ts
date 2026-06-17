import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-filetype-exe",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsFiletypeExe {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","d":"M14 4.5V14a2 2 0 0 1-2 2h-1v-1h1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5zM2.58 15.2H0.79v-1.07H2.47v-0.61H0.79v-1.02h1.79v-0.65H0v4h2.58zM6.31 11.85h-0.89l-0.82 1.44h-0.04l-0.83-1.44h-0.93l1.23 1.98-1.24 2.02h0.86l0.85-1.41h0.04l0.85 1.42h0.91l-1.25-1.99zm1.02 3.35h1.79v0.65H6.55V11.85h2.58v0.65h-1.79v1.02h1.68v0.61H7.33v1.07Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsFiletypeExe;
