import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gr-cpu",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GrCpu {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"stroke":"currentColor","stroke-width":"2","d":"M1 18h3m-3-4h3m-3-4h3M1 6h3m16 12h3m-3-4h3m-3-4h3m-3-4h3M6 1v3m4-3v3m4-3v3m4-3v3M6 20v3m4-3v3m4-3v3m4-3v3M5 20h14a1 1 0 1-1V5a1 1 0 0-1-1H5a1 1 0 0-1 1v14a1 1 0 1 1zm8-13h4v4h-4V7z"}]];
  readonly defaultAttr = {"fill":"none"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GrCpu;
