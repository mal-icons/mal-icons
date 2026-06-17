import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-abstract-050",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiAbstract050 {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"m21,21v135.13h135.13v-135.12h-135.12zm167.44,0v135.13h135.13v-135.12h-135.12zm167.44,0v135.13h135.13v-135.12h-135.12zm-334.87,167.44v135.13h135.13v-135.12h-135.12zm167.44,0v135.13h135.13v-135.12h-135.12zm167.44,0v135.13h135.13v-135.12h-135.12zm-334.87,167.44v135.13h135.13v-135.12h-135.12zm167.44,0v135.13h135.13v-135.12h-135.12zm167.44,0v135.13h135.13v-135.12h-135.12z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiAbstract050;
