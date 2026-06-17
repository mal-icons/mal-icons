import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-factory",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiFactory {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M384 64l0.39 256H368l-96-128-16 128-96-128-16 128-96-128-16 128v160h448V64h-32v256h-32V64h-32zM64 352h48v32H64v-32zm80 0h48v32h-48v-32zm80 0h48v32h-48v-32zm80 0h48v32h-48v-32zM64 416h48v32H64v-32zm80 0h48v32h-48v-32zm80 0h48v32h-48v-32zm80 0h48v32h-48v-32z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiFactory;
