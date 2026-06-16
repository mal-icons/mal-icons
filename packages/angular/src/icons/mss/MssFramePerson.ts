import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-frame-person",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssFramePerson {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M200-200v-134q0-20 8.5-37t24.5-28q51-38 117.5-59.5T480-480q63 0 129.5 21.5T727-399q16 11 24.5 28t8.5 37v134H200Zm60-60h440v-84q-48-35-106.5-55.5T480-420q-55 0-113.5 20T260-345v85Zm220-260q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm0-60q42 0 71-29t29-71q0-42-29-71t-71-29q-42 0-71 29t-29 71q0 42 29 71t71 29Zm0 320Zm0-420ZM40-728v-192h192v60H100v132H40ZM232-40H40v-192h60v132h132v60Zm496 0v-60h132v-132h60v192H728Zm132-688v-132H728v-60h192v192h-60Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssFramePerson;
