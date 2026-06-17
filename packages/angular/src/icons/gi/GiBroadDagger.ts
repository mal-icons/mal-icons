import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-broad-dagger",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiBroadDagger {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M62.94 16.73L19.72 59.95c1.62 12.54 7.58 26.89 19.39 41.9l65.97-65.97C90.06 24.2 75.52 18.26 62.94 16.73zM96.1 71.3L74.9 92.5c6.34 11.07 15.39 23.78 26.53 36.97l25.2-36.94c-10.86-8.72-21.27-15.93-30.52-21.23zM258.63 88.26l19.41 19.41L112.15 273.55l-19.41-19.4 34.88 101.26 54.08-12.3-51.91-51.91 165.88-165.88 51.91 51.91 12.3-54.08L258.63 88.26zm-117.68 16.43L114.25 143.83c2.63 2.8 5.34 5.6 8.13 8.39 1.31 1.31 2.61 2.59 3.92 3.86l38.05-28.49c-2.76-2.94-5.6-5.88-8.53-8.82-4.95-4.95-9.93-9.64-14.87-14.08zm35.88 36.9l-36.56 27.37c9.67 8.49 19.17 15.89 28.04 22.01l26.27-26.27c-5.07-7.36-11.01-15.14-17.74-23.11zm101.34 27.65l-22.97 22.97c54.55 55.23 93.45 99.89 117.89 132.92 13.02 17.6 21.98 31.83 27.18 43.22 2.6 5.7 4.32 10.65 4.92 15.550.6 4.9-0.02 10.74-4.27 15.03-4.24 4.28-10.11 4.96-15.01 4.37-4.9-0.58-9.85-2.3-15.54-4.89-11.37-5.18-25.59-14.12-43.18-27.13-33.02-24.43-77.71-63.36-133.04-118.02l-21.46 21.46c78.36 65.02 223.16 187.35 324.5 219.41-36.24-99.91-155.99-246.05-219.02-324.88zm-36.18 36.18l-34.62 34.62c54.88 54.2 99.09 92.64 130.95 116.21 16.98 12.57 30.55 20.93 39.81 25.15 3.49 1.59 6.08 2.39 8.06 2.86-0.48-2-1.29-4.63-2.91-8.16-4.24-9.29-12.63-22.88-25.2-39.87-23.59-31.87-62-76.04-116.09-130.82z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiBroadDagger;
