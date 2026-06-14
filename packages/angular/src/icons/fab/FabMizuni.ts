import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-fab-mizuni",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class FabMizuni {
  readonly viewBox = "0 0 496 512";
  readonly nodes: NodeTuple[] = [["path",{"d":"M248 8C111 8 0 119.1 0 256c0 137 111 248 248 248s248-111 248-248C496 119.1 385 8 248 8zm-80 351.9c-31.4 10.6-58.8 27.3-80 48.2V136c0-22.1 17.9-40 40-40s40 17.9 40 40v223.9zm120-9.9c-12.9-2-26.2-3.1-39.8-3.1-13.8 0-27.2 1.1-40.2 3.1V136c0-22.1 17.9-40 40-40s40 17.9 40 40v214zm120 57.7c-21.2-20.8-48.6-37.4-80-48V136c0-22.1 17.9-40 40-40s40 17.9 40 40v271.7z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default FabMizuni;
