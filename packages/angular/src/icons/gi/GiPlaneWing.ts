import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-plane-wing",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiPlaneWing {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M384 50c-14.69 0-29.36 6.75-31.68 20.23 10.29-3.73 21.4-5.66 32.53-5.69 10.46-0.03 20.92 1.62 30.7 5.01C412.87 56.52 398.44 50 384 50zm0.89 32.7c-10.250.03-20.53 1.93-29.45 5.62-6.35 2.63-13.65 6.58-18.8 11.01C331.5 103.76 329 108.05 329 112v52.24l110-43.33V112c0-3.91-2.39-8.28-7.21-12.72-4.82-4.44-11.67-8.43-17.69-11.01-8.76-3.77-18.97-5.6-29.22-5.57zM494 118.58L83.9 280.14c-5.35 2.73-13.29 10.74-20.87 21.96-7.63 11.3-15.2 25.66-21.79 40.54-10.3 23.27-18.01 48.48-20.92 64.37 22.14-3.98 44.66-8.05 67.35-12.11l5.72-37.95c30.85-8.91 111.01-29.02 154.29-40.42l0.28-0.560.630.32C345.57 290.76 409.75 278.18 494 268.32V118.58zm0 167.83c-25.69 3.03-49.47 6.31-72.91 10.15l-35.11 52.36c38.81-4.09 75.25-6.67 108.02-7.11v-55.4zm-97.42 14.4c-41.76 7.63-84.27 17.4-136.43 31.03l-18.33 36.67c41.49-6.58 82.12-12.43 120.76-16.97l34.01-50.73zM236.94 337.99c-36.77 9.86-78.7 21.63-127.91 35.66l-2.67 17.92c37.8-6.73 75.92-13.38 113.56-19.53l17.03-34.05zm65.58 39.73a3495.75 3495.75 0 0 0-24.73 3.62L281 418h18l3.52-40.28zm-95.9 14.88a6526.23 6526.23 0 0 0-24.88 4.18L185 434h18l3.62-41.39zm-96.05 16.54c-8.27 1.47-16.53 2.93-24.76 4.4L89 450h18l3.57-40.85z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiPlaneWing;
