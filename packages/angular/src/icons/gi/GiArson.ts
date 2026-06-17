import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-arson",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiArson {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M292.19 16.22c-111.48 14.2-135.34 99.82-95.06 166.28-43.16-17.87-61.8-44.18-43.66-82.47-41.67 21.62-63.65 64.59-62.72 111 0.73 36.28 15.24 64.62 37.72 85.16-11.34-28.98-14.3-59.25-7.06-84.78 35.74 49.33 137.82-20 147.13-79.28-0.04 63.67 63.97 118.38 112.69 52.41 8.69 35.97 6.75 73.19-2.44 103.16 18.76-19.76 30.68-45.35 31.56-76.66 1.26-44.88-21.04-74.46-72.12-96.06 19.29 27.88 11.74 60.29-8.81 73.84 13.51-68.19-120.6-105.09-37.22-172.53l0-0.06zm21.38 217.09v41.59l-0.72-0.56H199.72l-97.31 74.44h51.28v141.88H297.72v-68.28h37v68.28H358V348.78h52.16L358 308.88v-75.56h-44.44zM176.72 360.16h37v35.59h-37v-35.59zm59.78 0h37.03v35.59H236.5v-35.59zm60.5 0h37.03v35.59H297v-35.59zm-120.28 61.53l37 0v35.56h-37v-35.56zm59.780h37.03v35.56H236.5v-35.56z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiArson;
