import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-black-knight-helm",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiBlackKnightHelm {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M256 16c-36.45 0-73.26 13.43-139.97 40h279.94C329.26 29.43 292.45 16 256 16zM95.34 72L64 448c56 28 112 31.5 168 31.94V240H112v-48h288v48H280v239.94C336 479.5 392 476 448 448L416.66 72H95.34zm64.88 88a8 8 0 0 1 7.78 8 8 8 0 0 1-16 0 8 8 0 0 1 8.22-8zm48 0a8 8 0 0 1 7.78 8 8 8 0 0 1-16 0 8 8 0 0 1 8.22-8zm48 0a8 8 0 0 1 7.78 8 8 8 0 0 1-16 0 8 8 0 0 1 8.22-8zm48 0a8 8 0 0 1 7.78 8 8 8 0 0 1-16 0 8 8 0 0 1 8.22-8zm48 0a8 8 0 0 1 7.78 8 8 8 0 0 1-16 0 8 8 0 0 1 8.22-8zM248 240v240c2.670 5.33 0 8 0s5.330 8 0V240h-16zm-120 48h16v16h-16v-16zm32 0h16v16h-16v-16zm32 0h16v16h-16v-16zm112 0h16v16h-16v-16zm32 0h16v16h-16v-16zm32 0h16v16h-16v-16zm-240 32h16v16h-16v-16zm32 0h16v16h-16v-16zm32 0h16v16h-16v-16zm112 0h16v16h-16v-16zm32 0h16v16h-16v-16zm32 0h16v16h-16v-16zm-240 32h16v16h-16v-16zm32 0h16v16h-16v-16zm32 0h16v16h-16v-16zm112 0h16v16h-16v-16zm32 0h16v16h-16v-16zm32 0h16v16h-16v-16z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiBlackKnightHelm;
