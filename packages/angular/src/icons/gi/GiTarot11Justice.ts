import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-tarot-11-justice",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiTarot11Justice {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"m126.16 484.05 24.76-102.47 48.85-26.42 7.63-37.55 22.16 12.56-6.17 41.45-44.33 27.88-14.37 63.27h183.38l-2.48-20.14 25.48-11.5 12.84 52.92zm242.94-83.52-26.48-64.58h72.97l-26.48 64.58 2.68 3.75s10.43 15.56 36.23 15.56 36.23-15.56 36.23-15.56l2.68-3.75-33.31-81.25H324.61l-33.31 81.25 2.68 3.75s10.43 15.56 36.23 15.56 36.23-15.56 36.23-15.56zm41.89-9.43h34.04l-17.02-41.52zm-97.81 0h34.04l-17.02-41.52zm-28.85-66.1 3.87 27 17.46-39.04zM98.33 283.24l73.38 23.58c-39.3 29.17-70.45 8.28-70.45 8.28zm169.08-51.17 12.4 74.07s45.84-43.46 98.79-43.46l-67.57-58.49zm-103.57 4.06 39.77-31.95 40.08 28.23-9.09 73.72-56.76-33v-37zM380.58 277.44c-10.19 1.3-20.64 12.73-17.05 27.35h36.17c0-4.03-0.86-29.01-19.12-27.35zM98.82 249.55H72.85v16.67h84.96v-16.67H131.84l2.87-155.28-19.38-66.78-19.38 66.78zm124.32-98.59 3.97-1.53s12.68-4.8 28.9-4.8 28.9 4.8 28.9 4.8l3.97 1.53c0.34 2.380.52 4.820.52 7.32 0 22.87-14.96 41.44-33.38 41.44-18.42 0-33.38-18.57-33.38-41.44 0-2.50.18-4.940.52-7.32zm43.28-49.9V75.1h-20.83v25.95a142.52 142.52 0 0 0-18.57 2.72l-6.63-20.36-19.81 6.45 6.42 19.73-0.070.02 7.54 23.84 11.92-3.77s12.99-4.05 29.61-4.05 29.61 4.05 29.61 4.05l11.92 3.77 7.54-23.84-0.07-0.02 6.42-19.73-19.81-6.45-6.63 20.36a142.64 142.64 0 0 0-18.57-2.72z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiTarot11Justice;
