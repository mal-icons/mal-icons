import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-dev-laravel",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class DevLaravel {
  readonly viewBox = "0 0 600 600";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M591 135.7q0.4 1.30.4 2.5V267c0 3.3-1.8 6.4-4.7 8.1l-108.1 62.3v123.3c0 3.4-1.8 6.5-4.7 8.2L248.3 598.8l-1.70.6-0.60.3q-2.40.6-4.8 0-0.4 0-0.8-0.3l-1.5-0.6-225.6-130a9 9 0 0 1-4.7-8V74.2l0.3-2.4q0-0.40.3-0.8l0.6-1.50.7-0.8q0.4-0.70.8-1 0.4-0.5 1-0.8l1-0.8L126 1.2a10 10 0 0 1 9.4 0l112.8 65 1 0.8 1 0.70.8 1.10.60.80.6 1.50.40.80.3 2.4v241.4l94-54.2V138.2q0-1.20.3-2.5l0.4-0.8q0.1-0.80.6-1.4l0.6-0.90.8-1 1-0.7 1-0.9 112.8-64.9c3-1.7 6.5-1.7 9.4 0l112.8 65 1 0.7 1 0.70.8 1.10.60.90.7 1.4q0 0.50.30.8m-18.4 125.8v-107l-39.5 22.7-54.5 31.4v107zM459.8 455.3V348l-53.6 30.6L253 466.2v108.1zM27.4 90.6v364.7l206.8 119V466.2l-108-61.2h-0.1l-1-0.8-1-0.7-0.7-1-0.7-0.9q-0.4-0.6-0.5-1.2l-0.5-1-0.2-1.5-0.1-1V144.7l-54.5-31.4zm103.4-70.4-94 54.1 94 54.1 94-54zM179.7 358l54.5-31.4v-236l-39.5 22.7-54.5 31.4v236zM469.2 84l-94 54 94 54.2 94-54.1zm-9.4 124.5-54.5-31.4-39.5-22.8v107.1l54.5 31.4 39.5 22.8zM243.6 449.9l137.8-78.7 69-39.3-94-54L248.3 340l-98.5 56.7z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default DevLaravel;
