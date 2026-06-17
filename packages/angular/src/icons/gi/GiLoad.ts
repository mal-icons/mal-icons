import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-load",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiLoad {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M64 48c-8.73 0-16 7.27-16 16v384c0 8.73 7.27 16 16 16h236.25l-16-16H64V64h63.38v97.53c0 3.92 3.44 7.1 7.72 7.1h169.81c4.28 0 7.72-3.17 7.72-7.09V64h69.22c0.430.320.80.55 1.47 1.09 2.05 1.68 4.96 4.26 8.38 7.41 6.83 6.28 15.65 14.84 24.31 23.5 8.66 8.66 17.22 17.49 23.5 24.31 3.14 3.41 5.73 6.32 7.41 8.370.550.670.78 1.04 1.09 1.47V366h16V128c0-2.68-0.66-3.4-1.03-4.16-0.37-0.75-0.72-1.29-1.09-1.84-0.74-1.1-1.57-2.19-2.59-3.44-2.04-2.49-4.77-5.55-8.03-9.09-6.52-7.09-15.15-16-23.94-24.78-8.78-8.78-17.69-17.41-24.78-23.94-3.54-3.26-6.6-5.99-9.09-8.03-1.25-1.02-2.34-1.85-3.44-2.59-0.55-0.37-1.09-0.72-1.84-1.09-0.75-0.37-1.48-1.03-4.16-1.03H64zm87.72 16h48.56c4.28 0 7.72 4.43 7.72 9.94v70.12c0 5.51-3.44 9.94-7.72 9.94h-48.56c-4.28 0-7.72-4.42-7.72-9.94V73.94c0-5.51 3.44-9.94 7.72-9.94zM114 212c-4.43 0-8 3.57-8 8v184c0 4.43 3.57 8 8 8h134.25l-30.62-30.62L202.28 366H279V238h127v-18c0-4.43-3.57-8-8-8H114zm183 44v128h-51.25L352 490.25 458.25 384H407V256H297zm167 147.75l-16 16V448h-28.25l-16 16H448c8.73 0 16-7.27 16-16v-44.25z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiLoad;
