import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-trousers",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiTrousers {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M258.38 21.16c-44.560.19-87.24 7.38-118.56 21l-1.78 16.09h25.66v18.69H136l-2.12 19.41h29.81v18.69h-31.87l-38.72 352.88 123.34 24.81 34.16-262.85H236.69v-97.75H220.94V115.03h-38.56V96.35h38.56V76.94h-38.56V58.25h38.56V41.53h90.94v16.72h33.03v18.69h-33.03v19.41h33.03v18.69h-33.03v17.1h-56.5v79.06h27.41v18.69h-11.56l34.25 263.75h0.22l129.06-26.28-38.72-352.31h-32.44V96.35H394l-2.16-19.41h-28.25V58.25h26.22l-1.78-16.09c-38.7-14.31-85.1-21.17-129.65-21zm-18.75 39.06v17.47h34.94v18.69h-34.94v17.06h53.56v-53.22h-53.56z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiTrousers;
