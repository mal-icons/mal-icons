import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-automatic-sas",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiAutomaticSas {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M165.61 19.77c-23.41-0.1-45.42 3.88-65 12.15l59.09 143.24c2.41-4 5.27-7.71 8.63-11.06 7.1-7.1 15.76-12.04 25.48-14.95l54.87-113.72c-28.48-10.21-56.66-15.53-83.06-15.65zM83.9 40.39C75.09 45.68 66.92 52 59.53 59.39 36.04 82.87 23.29 114.19 20.5 149.45l136.27 99.38c-5.55-16.14-7.63-32.02-6-46.36L83.9 40.39zm182.19 1.89l-50.04 103.72c17.45-0.07 36.65 4.87 55.51 14.39l141.17-5.32c-8.73-10.74-18.18-21.25-28.34-31.41C347.89 87.16 307 59.76 266.1 42.28zM20.06 172.25c1.91 51.05 22.71 108.13 60.36 160.89l134.82-5.08c-6.03-4.68-11.91-9.85-17.56-15.49-8.61-8.61-16.1-17.75-22.44-27.14L20.06 172.25zm406.590.99L299.31 178.03c6.01 4.67 11.86 9.81 17.49 15.44 8.67 8.67 16.21 17.88 22.59 27.35l148.39 108.22c-3.41-49.83-24.4-104.89-61.11-155.81zM357.77 257.35c5.55 16.19 7.6 32.12 5.93 46.48l66.08 160.2c6.73-4.52 13.05-9.68 18.88-15.5 24.83-24.83 37.66-58.4 39.41-96.15l-130.3-95.02zm-3.06 73.67c-2.39 3.95-5.23 7.61-8.54 10.92-7.11 7.12-15.8 12.07-25.54 14.98L264.09 474.09c54.68 18.62 107.97 19.07 149.33-0.74L354.71 331.02zm-111.68 14.69l-148.8 5.6c9.08 11.28 18.93 22.3 29.57 32.94 37.82 37.83 80.36 65.88 122.73 83.25l51.85-107.45c-17.410.06-36.54-4.86-55.35-14.34z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiAutomaticSas;
