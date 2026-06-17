import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-film-projector",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiFilmProjector {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M266 51.73c-39.32 0-71 31.68-71 71 0 39.32 31.68 71 71 71s71-31.68 71-71c0-39.32-31.68-71-71-71zm-144 32c-30.48 0-55 24.52-55 55 0 30.48 24.52 55 55 55s55-24.52 55-55c0-30.48-24.52-55-55-55zm-23 128v110h238V211.73zm350 4.65l-94 40.28v20.13l94 40.28zm-386 2.35v32h18v-32zm113 121v18h13.01l-51.12 136.28h19.22l51.51-136.270.38 136.28h18l0.38-136.27 51.51 136.28h19.22l-51.12-136.27H260v-18c-280-56 0-84 0z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiFilmProjector;
