import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-sl-screen-tablet",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SlScreenTablet {
  readonly viewBox = "0 0 1024 1024";
  readonly nodes: NodeTuple[] = [["path",{"d":"M832.14 0H191.86c-53.02 0-96 42.98-96 96v832c0 53.02 42.98 96 96 96h640.29c53.02 0 96-42.98 96-96V96c0-53.02-42.98-96-96-96zm32 928c0 17.66-14.34 32-32 32H191.86c-17.66 0-32-14.34-32-32V96c0-17.66 14.34-32 32-32h640.29c17.66 0 32 14.34 32 32v832zM512.05 800.18c-35.28 0-63.84 28.59-63.84 63.82s28.56 63.84 63.84 63.84c35.26 0 63.84-28.61 63.84-63.84 0-35.23-28.58-63.82-63.84-63.82zm64-704.18h-128c-17.66 0-32 14.34-32 32s14.34 32 32 32h128c17.66 0 32-14.34 32-32s-14.34-32-32-32z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SlScreenTablet;
