import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-bluetooth-drive",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoBluetoothDrive {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M248-314q23.33 0 39.67-15.75Q304-345.5 304-368q0-23.33-16.26-39.67Q271.47-424 248.24-424 225-424 209.5-407.73q-15.5 16.26-15.5 39.5Q194-345 209.75-329.5T248-314Zm391 0q23.33 0 39.67-15.75Q695-345.5 695-368q0-23.33-16.26-39.67Q662.47-424 639.24-424 616-424 600.5-407.73q-15.5 16.26-15.5 39.5Q585-345 600.75-329.5T639-314ZM114-120q-12.75 0-21.37-8.62T84-150v-330l82.13-240q5.87-18 21.44-29t34.66-11H604v60H222l-55 166h437v60H144v210h600v-210h60v324q0 12.75-8.62 21.38T774-120h-19q-13.17 0-22.09-8.62Q724-137.25 724-150v-54H164v54q0 12.75-8.62 21.38T134-120h-20Zm641-400v-164l-97 97-21-21 112-112-112-112 21-21 97 97v-164h8l114 116-86 84 86 86-114 114h-8Zm35-248 38-36-38-38v74Zm0 172 38-38-38-38v76ZM144-474v210-210Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoBluetoothDrive;
