import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-move-down",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssMoveDown {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"m280-120-43-43 86-86q-108 7-195.5-70.5T40-520q0-117 81.5-198.5T320-800h120v60H320q-91 0-155.5 64.5T100-520q0 94 65.5 154T326-308l-89-89 43-43 160 160-160 160Zm240-40v-280h360v280H520Zm0-360v-280h360v280H520Zm60-60h240v-160H580v160Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssMoveDown;
