import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-speaker",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiSpeaker {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M275.5 96l-96 96h-96v128h96l96 96V96zm51.46 27.67l-4.66 17.39c52.07 13.95 88.2 61.04 88.2 114.95 0 53.9-36.13 100.99-88.2 114.95l4.66 17.39C386.81 372.3 428.5 317.96 428.5 256c0-61.96-41.69-116.29-101.54-132.33zm-12.42 46.37l-4.66 17.39C340.96 195.75 362.5 223.82 362.5 256s-21.54 60.25-52.62 68.58l4.66 17.39C353.4 331.55 380.5 296.24 380.5 256c0-40.24-27.1-75.55-65.96-85.97zm-12.42 46.36l-4.66 17.39C307.55 236.49 314.5 245.55 314.5 256s-6.95 19.51-17.05 22.22l4.66 17.39c17.88-4.79 30.39-21.09 30.39-39.6 0-18.51-12.51-34.81-30.39-39.6z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiSpeaker;
