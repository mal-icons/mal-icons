import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-io-pulse-sharp",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class IoPulseSharp {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"d":"M426,266a54.07,54.07,0,0,0-49.3,32H351.86l-27-81a22,22,0,0,0-42,0.92L245.66,348.12l-48-281.74a22,22,0,0,0-43-1.72L94.82,298H32v44h80a22,22,0,0,0,21.34-16.66L171.69,172,218.3,445.62A22,22,0,0,0,238.76,464c0.42,0,0.82,0,1.24,0a22,22,0,0,0,21.15-16l44.47-149.62L315.13,327A22,22,0,0,0,336,342h40.7A54,54,0,1,0,426,266Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default IoPulseSharp;
