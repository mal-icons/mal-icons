import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-bed-lamp",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiBedLamp {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M165.56 25l-87 174H432.93L339.21 25H165.56zM233 217v30h46v-30h-46zm-9 48c-1 0-9.31 1.61-18.52 5.15-9.21 3.54-20.24 8.82-30.65 15.44C154.02 298.84 137 317 137 336c0 59.3 28.83 104.44 59.84 151h118.33C346.17 440.44 375 395.3 375 336c0-19-17.02-37.16-37.83-50.41-10.4-6.62-21.44-11.9-30.65-15.44C297.31 266.61 289 265 288 265h-64z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiBedLamp;
