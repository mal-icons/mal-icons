import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-satellite-alt",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssSatelliteAlt {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M560-32v-60q125 0 212.5-87.32Q860-266.64 860-392h60q0 75-28.5 140.5t-77 114q-48.5 48.5-114 77T560-32Zm0-120v-60q69 0 124.5-55.5T740-392h60q0 95-72.5 167.5T560-152ZM222-49q-11.67 0-23.33-4.5Q187-58 179-66L9-236q-8-8-12.5-19.56Q-8-267.11-8-278.67-8-291-3.56-301.87T9-321l151-151q17-17 42.5-17t42.5 17l64 64 37-37-106-106 160-160 106 107 37-37-64-64q-17-17.38-17-42.69T479-790l151-151q8.86-9 19.93-13.5Q661-959 673-959q12 0 23 4t20 13l170 170q8.87 8.52 12.94 19.75Q903-741.01 903-728.62q0 11.62-5 23.12-5 11.5-13 19.5L734-535q-23 23-42.5 23T649-535l-64-64-37 37 106 106-159 159-107-106-37 37 64 64q17 17 17 42.5T415-217L264-66q-8.25 8.13-19.12 12.57Q234-49 222-49Zm0-59 54-54-170-170-54 54 170 170Zm97-97 54-54-170-170-54 54 170 170Zm176-176 74-74-170-170-74 74 170 170Zm197-197 54-54-170-170-54 54 170 170Zm97-97 54-54-170-170-54 54 170 170ZM447-503Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssSatelliteAlt;
