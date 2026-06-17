import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-stomp-tornado",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiStompTornado {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M141.94 19.12l18.43 56.65C191.11 94.46 328.19 62.62 356.28 26.13c-38.56 23.65-135.53 21.36-160.02-7.01H141.94zm230.45 12.24c-14.16 34.33-39.77 60.53-65.64 74.05 14.96 1.99 31.04 4.38 46.56-5.05l19.08-69zM330.05 63.55C281.18 86.94 255.64 95.63 224.3 101.36c17.39 18.69 46.53 29.99 76.01 36-15.73 15.91-45.84 30.01-74.76 36.79 30.22 5.79 114.96 0 124.05-53.56-14.11 10.97-58.05-0.69-77.59-14.49 19.22-7.58 38.18-18.91 58.04-42.55zM164.33 92.84l8.33 44.83c11.17 10.12 48.68 24.69 98.77 5.95-54.65-2.8-85.7-28.03-107.1-50.77zm180.85 83.39c-14.15 57.41-116.86 104-178.71 88.19l-4.29 15.32 53.2 43.11 12.26-26.69c-10.46-2.58-20.84-6.28-30.8-11.3 63.5 6.46 141.95-24.85 148.93-48.47l-0.58-60.15zm-170.02 1.03l-3.45 61.37c13.01 16.84 102.14 11.77 160.46-57.68-42.66 25.84-80.12 37-105.21 35.51 0 0 43.29-16.72 57.57-27.29-47 10.66-96.06 6.04-109.37-11.9zm174.7 89.49c-3.4 6.94-9.93 13.23-18.7 18.46l1.68 16.75 21.03-15.72-4.01-19.49zm51.26 7.5l-83.59 62.48-2.88-28.8-33.57 45.98-43.2-35.26-15.56 33.88-49.96-40.48-4.01 25.03-56.22-56.22 22.03 98.78c81.24 22.15 161.89 24.26 242.730.13l24.23-105.49zm-101.82 23.01c-16.77 3.7-36.05 4.7-55.65 1.97l33.97 27.73 21.69-29.7zM18.36 378.2v115.5h475.29V378.2H468.44l-87.11 23.04 56.05 34.32-106.77-19.49 34.06 41.95-68.33-26.280.04 44.97-43.8-43.81-50.07 43.91 4.84-51.86-66.41 31.2 11.84-32.58-82.34 5.47 50.72-29.17L43.27 378.2H18.36z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiStompTornado;
