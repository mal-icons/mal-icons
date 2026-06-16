import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-water-voc",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssWaterVoc {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M160-408q0-100 79.5-217.5T480-880q131 111 207.5 209T789-486h-64q-24-69-86-148.5T480-800Q353-688 286.5-587.5T220-408.32Q220-293 294-216.5T480-140q8 0 15-0.5t15-1.5v61q-8 1-15 1h-15q-137 0-228.5-94T160-408Zm313-62ZM597-74l-13-29q-8-17-11-34.18-3-17.18-3-34.82 0-21.66 5.5-42.83Q581-236 591-256q8-17 13.5-34.82Q610-308.65 610-328q0-16.39-3.5-31.7Q603-375 596-389l-9-21 36-16 12 28q8 17 11.5 34.36Q650-346.28 650-328q0 20.97-5 40.98Q640-267 631-248q-8.4 17.99-14.7 37.03-6.3 19.05-6.3 39.15 0 14.81 3.5 29.31T623-114l11 24-37 16Zm120 0-13-29q-8-17-11-34.18-3-17.18-3-34.82 0-21.66 5.5-42.83Q701-236 711-256q8-17 13.5-34.82Q730-308.65 730-328q0-16.39-3.5-31.7Q723-375 716-389l-9-21 36-16 12 27q7 17 11 35t4 36q0 20.97-5 40.98Q760-267 751-248q-8.4 17.99-14.7 37.03-6.3 19.05-6.3 39.15 0 14.81 3.5 29.31T743-114l11 24-37 16Zm120 0-13-29q-8-17-11-34.18-3-17.18-3-34.82 0-21.66 5.5-42.83Q821-236 831-256q8-17 13.5-34.82Q850-308.65 850-328q0-16.39-3.5-31.7Q843-375 836-389l-9-21 36-16 13 27q8 17 11 34.81 3 17.81 3 36.56Q890-307 885-287t-14 39q-8.4 18.2-14.7 36.94-6.3 18.74-6.3 39.08 0 14.99 3.5 29.49T863-114l11 24-37 16Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssWaterVoc;
