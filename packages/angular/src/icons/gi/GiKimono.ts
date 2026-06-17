import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-kimono",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiKimono {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M192 24l-9.62 9.62c0.590.6 1.09 1.28 1.48 2.01l72.6 130.67L328.11 35.67c0.13-0.240.27-0.470.42-0.69L320 24c-32 23.71-96 21.27-128 0zm-22.62 22.62L160 56c-16 0-48 16-64 32L16 248l80 48 48-112-9.16 87h64.19l47.2-86.05zm171.16 3.83L228.34 255H297v16h80.16L368 184l48 112 80-48-80-160c-13.32-12.13-48-32-71.15-32zM129.58 321l-9.98 94.84L171.61 321zm62.57 0l-76.87 135.88C114.28 458.76 112 488 112 488h288l-17.58-167h-79.86l48 96h-52.12L256 332.13 213.56 417h-52.09c15.96-32 31.83-64.05 47.88-96z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiKimono;
