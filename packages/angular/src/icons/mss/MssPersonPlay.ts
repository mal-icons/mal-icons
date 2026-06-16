import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-person-play",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssPersonPlay {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M206-478 64-620l142-141 141 141-141 142ZM373-80v-212.68Q309-298 246-306.5T120-330l15-60q85.27 20 171.04 28.5 85.78 8.5 174.09 8.5 88.31 0 174.09-8.5Q740-370 825-390l15 60q-63 15-125.98 23.71Q651.03-297.58 587-293v213H373ZM206-561l58-59-58-58-59 58 59 59Zm273.88-139Q434-700 402-732.12q-32-32.12-32-78Q370-856 402.12-888q32.12-32 78-32Q526-920 558-887.88q32 32.12 32 78Q590-764 557.88-732q-32.12 32-78 32Zm0.2 286q-30.08 0-51.58-21.42-21.5-21.42-21.5-51.5 0-30.08 21.42-51.58 21.42-21.5 51.5-21.5 30.08 0 51.58 21.42 21.5 21.42 21.5 51.5 0 30.08-21.42 51.58-21.42 21.5-51.5 21.5Zm-0.25-346Q501-760 515.5-774.32q14.5-14.32 14.5-35.5Q530-831 515.67-845.5q-14.32-14.5-35.5-14.5Q459-860 444.5-845.67q-14.5 14.32-14.5 35.5Q430-789 444.33-774.5q14.32 14.5 35.5 14.5ZM698-490l-62-110 62.33-110H823l62 110-62.33 110H698Zm34.67-60H788l28-50-27.67-50H733l-28 50 27.67 50ZM206-620Zm274-190Zm281 210Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssPersonPlay;
