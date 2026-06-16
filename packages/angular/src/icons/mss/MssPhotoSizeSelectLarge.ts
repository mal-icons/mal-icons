import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-photo-size-select-large",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssPhotoSizeSelectLarge {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M120-120v-572h572v572H120Zm97-103h383L469-396l-99.67 137L308-345l-91 122Zm-97-557v-60h60v60h-60Zm319 0v-60h83v60h-83Zm341 0v-60h60v60h-60Zm-512 0v-60h83v60h-83Zm512 341v-83h60v83h-60Zm0 319v-60h60v60h-60Zm0-489v-83h60v83h-60Zm0 341v-83h60v83h-60ZM609-780v-60h83v60h-83Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssPhotoSizeSelectLarge;
