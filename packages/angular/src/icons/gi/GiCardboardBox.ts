import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-cardboard-box",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiCardboardBox {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M185.42 52.61L30.4 130.04l55.38 55.32 155.02-77.43-55.37-55.32zm141.15 0l-55.37 55.32 155.02 77.43 55.38-55.32-155.02-77.43zM256 120.45l-9 4.5v142.72l9 4.5 9-4.5V124.95l-9-4.5zM86.48 207.61l-57.59 71.92 139.54 77.45 72.36-72.29-154.31-77.08zm339.04 0l-154.31 77.08 72.36 72.29 139.54-77.45-57.59-71.92zM247 303.93l-75.44 75.36-78.56-43.6v44.06L247 456.67V303.93zm18 0v152.74l154-76.92v-44.06l-78.56 43.6L265 303.93z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiCardboardBox;
