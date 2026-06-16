import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-phone-bluetooth-speaker",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssPhoneBluetoothSpeaker {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M673-463v-164L572-526l-26-26 124-124-124-118 26-26 101 101v-164h17l119 122-87 85 87 93-119 120h-17Zm40-256 44-42-44-51v93Zm0 181 44-45-44-44v89Zm82 418q-122 0-242.5-59.5T336-335q-96-96-156-217t-60-243q0-11 1-23t3-22h212l40 189-117 118q56 93 125.5 162T542-254l117-121 181 40v212q-10 1-22 2t-23 1ZM229-588l81-82-23-110H180q0 39 12 85.5T229-588Zm369 363q41 19 89 31t93 14v-107l-103-21-79 83ZM229-588Zm369 363Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssPhoneBluetoothSpeaker;
